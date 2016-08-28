
var gulp = require("gulp"),
    connect = require("gulp-connect"),
    sass = require("gulp-sass"),
    sourceSass = "./sass/**/*.scss",
    sourceHtml = "*.html",
    sourceJs = "./js/**/*.js",
    output = "./css";

gulp.task("server", function() {
  connect.server({
    root: "",
    livereload: true,
    port: 9999
  });
});

gulp.task("html", function() {
  return gulp.src( sourceHtml )
    .pipe(connect.reload());
});

gulp.task("js", function() {
  return gulp.src( sourceJs )
    .pipe(connect.reload());
});

gulp.task("sass", function() {
    return gulp.src( sourceSass )
      .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
      .pipe(gulp.dest(output))
      .pipe(connect.reload());
});

gulp.task("watch", function() {
  gulp.watch([sourceHtml], ["html"]);
  gulp.watch([sourceSass], ["sass"]);
  gulp.watch([sourceJs], ["js"]);
});

gulp.task("default", ["server", "watch", "html", "sass", "js"]);