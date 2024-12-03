const gulp= require('gulp');
const postcss= require('gulp-postcss');
const autoprefixer= require('autoprefixer-core');
const lost = require('lost');

gulp.task('frontend', (callback)=>{
    var proceso =[lost,autoprefixer];
    return gulp.src('styles.css')
    .pipe(postcss(proceso))
    .pipe(gulp.dest('./dist'))
    }
)