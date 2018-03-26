var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
    return gulp.src(['app/scss/*.scss', 'node_modules/bootstrap-sass/assets/stylesheets/*.scss'])
      .pipe(sass())
      .pipe(gulp.dest('app/css'))
  });