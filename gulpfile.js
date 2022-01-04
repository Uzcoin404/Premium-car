global.$ = {
  gulp: require("gulp"),
  gp: require("gulp-load-plugins")(),
  bs: require("browser-sync").create(),
  imagemin: require("gulp-imagemin"),

  path: {
    serverDir: "./dist",
    tasks: require("./gulp/config"),
    src: {
      html: "./src/*.{html,pug}",
      style: "./src/scss/*.*",
      js: "./src/js/*.js",
      img: "./src/img/*.{jpg,jpeg,gif,png,svg}",
      fonts: "./src/fonts/**/**/*.*",
    },
    dist: {
      html: "./dist/",
      style: "./dist/css/",
      js: "./dist/js/",
      img: "./dist/img/",
      fonts: "./dist/fonts/",
    },
    watch: {
      html: ["./src/*.{html,pug}", "./src/view/**/*.{html,pug}"],
      style: "./src/scss/**/*.scss",
      js: "./src/js/**/*.js",
      img: "./src/img/**/*.{jpg,jpeg,gif,png,svg}",
      fonts: "./src/fonts/**/**/*.*",
    },
  },
  tasks: {
    default: ["html", "style", "img", "js", "watch", "fonts", "serve"],
    dist: ["html", "img", "js", "style", "fonts"],
  },
};

var ghpages = require('gh-pages');
ghpages.publish('dist', function(err) {});

$.path.tasks.forEach((pat) => require(pat)());
for (const valu in $.tasks) {
  $.gulp.task(valu, $.gulp.series($.gulp.parallel(...$.tasks[valu])));
  console.log(...$.tasks[valu]);
}
