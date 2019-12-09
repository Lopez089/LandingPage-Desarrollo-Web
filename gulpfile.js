const gulp = require("gulp");
const sass = require("gulp-sass");

gulp.task("sass", () => {
  return gulp
    .src(["./node_modules/bootstrap/scss/*.scss"])
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(gulp.dest("./src"));
});

gulp.watch(["../node_modules/bootstrap/scss/*.scss"], gulp.series("sass"));

gulp.task("default", gulp.series("sass"));
