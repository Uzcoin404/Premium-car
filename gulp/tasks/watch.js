module.exports = () => 
$.gulp.task('watch', () => {
for (key in $.path.watch) {
 const pat = $.path.watch[key]
 $.gulp.watch(pat, $.gulp.series(key))
}
}
)