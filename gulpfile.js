const gulp        = require('gulp');
const browserSync = require('browser-sync').create();
const sass        = require('gulp-sass');




// Compile Sass & Inject Into Browser
gulp.task('sass', function() {
    return gulp.src(['src/app/styles/scss/*.scss'])
        .pipe(sass())
        .pipe(gulp.dest("src/app/styles/css"))
        .pipe(browserSync.stream());
});


// Watch Sass & Serve
gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: "./src"
    });

    gulp.watch(['src/app/styles/scss/*.scss'], ['sass']);
    gulp.watch("src/*.html").on('change', browserSync.reload);
});






// Default Task
gulp.task('default', ['serve']);
