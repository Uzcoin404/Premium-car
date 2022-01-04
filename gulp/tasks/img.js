
module.exports = () => 
$.gulp.task('img', () =>
$.gulp.src($.path.src.img)
.pipe($.imagemin())
.pipe($.gulp.dest($.path.dist.img))
.on('end', $.bs.reload)
)