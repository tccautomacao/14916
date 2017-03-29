const gulp = require('gulp')
const stylus = require('gulp-stylus')
const pug = require('gulp-pug')
const connect = require('gulp-connect')

gulp.task('pug', () => {
  gulp
    .src('./src/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('./out'))
    .pipe(connect.reload())
})

gulp.task('stylus', () => {
  gulp
    .src('./src/assets/styles/*.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./out/assets/styles/'))
    .pipe(connect.reload())
})

gulp.task('watch', () => {
  gulp.watch(['./src/*.pug'], ['pug'])
  gulp.watch(['./src/assets/styles/*.styl'], ['stylus'])
})

gulp.task('serve', () => {
  connect.server({root: './out', livereload: true})
})

gulp.task('build', ['pug', 'stylus'])

gulp.task('server', ['serve', 'watch'])
