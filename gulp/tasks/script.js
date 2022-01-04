module.exports = () => 
$.gulp.task('js', () =>
$.gulp.src($.path.src.js)
.pipe($.gp.include())
.pipe($.gp.babel())
.pipe($.gulp.dest($.path.dist.js))
.on('end', $.bs.reload)
)