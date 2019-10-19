const toml = require('toml');

const CONTENT_PATH_PREFIX = "content/docs";

module.exports = function(grunt) {

    grunt.registerTask("content-index", function() {

        grunt.log.writeln("Build pages index");

        let indexPages = () => {
            let pagesIndex = [];

            grunt.file.recurse(CONTENT_PATH_PREFIX, function(abspath, rootdir, subdir, filename) {
                grunt.verbose.writeln("Parse file:", abspath);
                pagesIndex.push(processFile(abspath, filename));
            });

            return pagesIndex;
        }

        let processFile = (abspath, filename) => {
            return (filename.endsWith('.html')) ? processHTMLFile(abspath, filename) : processMDFile(abspath, filename);
        }

        let processHTMLFile = (abspath, filename) => {
            return {
                title: filename.replace('.html', ''),
                href: abspath.replace(CONTENT_PATH_PREFIX, ''),
                content: grunt.file.read(abspath).replace(/<[^>]*>?/gm, '').replace(/[^\w\s]|_/g, '').replace(/\s+/g, ' ').trim(),
            }
        };

        let processMDFile = (abspath, filename) => {
            let content = grunt.file.read(abspath);
            let pageIndex;
            
            // First separate the Front Matter from the content and parse it
            content = content.split("+++");

            let frontMatter;

            try {
                frontMatter = toml.parse(content[1].trim());
            } catch (e) {
                console.log(e.message);
            }

            let href = abspath.replace(CONTENT_PATH_PREFIX, '').replace('.md', '');

            // href for index.md files stops at the folder name
            if (filename === 'index.md') {
                href = abspath.replace(CONTENT_PATH_PREFIX, '').replace(filename, '');
            }

            // Build Lunr index for this page
            pageIndex = {
                title: frontMatter.title,
                tags: frontMatter.tags,
                href: href,
                content: content[2].replace(/<[^>]*>?/gm, '').replace(/[^\w\s]|_/g, '').replace(/\s+/g, ' ').trim(),
            };

            return pageIndex;
        };

        grunt.file.write("static/Content-Index.json", JSON.stringify(indexPages()));
        grunt.log.ok("Index built");
    });
};
