const gulp= require('gulp');
const postcss= require('gulp-postcss');
const autoprefixer= require('autoprefixer-core');
const lost = require('lost');
const cssnext= require('gulp-cssnext');
gulp.task('frontend', (callback)=>{
    var proceso =[lost,autoprefixer];
    return gulp.src('styles.css')
    .pipe(cssnext({compress:true}))
    .pipe(postcss(proceso))
    .pipe(gulp.dest('./dist'))
    }
)