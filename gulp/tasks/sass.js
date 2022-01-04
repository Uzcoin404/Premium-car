const { reload } = require("browser-sync");
const { on } = require("gulp");

module.exports = () =>
    $.gulp.task('style', () =>
    $.gulp.src($.path.src.style)
    .pipe($.gp.sass({outputStyle: 'expanded'}))
    .pipe($.gp.groupCssMediaQueries())
    .pipe($.gp.autoprefixer())
    .pipe($.gp.sass({outputStyle: 'compressed'}))
    .pipe($.gp.rename('style.css'))
    .pipe($.gulp.dest($.path.dist.style))
    .on('end', $.bs.reload)
)