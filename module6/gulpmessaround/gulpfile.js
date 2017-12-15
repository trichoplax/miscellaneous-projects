var gulp = require('gulp');
var sass = require('gulp-sass')
var browserSync = require('browser-sync').create();
var sourcemaps = require("gulp-sourcemaps")
var babel = require("gulp-babel")
var concat = require("gulp-concat")

gulp.task('hello', function() {
	console.log('Hello, World!')
})

gulp.task('sass', function() {
	return gulp.src('app/scss/**/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.reload({
			stream: true
		}))
})

gulp.task('watch', ['babel', 'sass'], function() {
	gulp.watch('app/scss/**/*.scss', ['sass'])
	gulp.watch('src/*.js', ['babel'])
})

gulp.task('browserSync', function() {
	browserSync.init({
		server: {
			baseDir: 'app'
		}
	})
})

gulp.task("babel", function() {
	return gulp.src("src/*.js")
	.pipe(sourcemaps.init())
	.pipe(babel())
	.pipe(concat("all.js"))
	.pipe(sourcemaps.write("."))
	.pipe(gulp.dest("js/"))
})
