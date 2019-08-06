const gulp = require("gulp");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
// const babel = require ("gulp babel");

gulp.task("compilar-script", function(){
    return gulp.src("js/*.js")
    .pipe(concat("scripts.js"))
    // .pipe(babel({
    //     presents:['@babel/env']
    // }))
    .pipe(uglify())
    .pipe(gulp.dest('minifi'))
})

gulp.task("compilar-css", function(){
    return gulp.src("css/*.css")
    .pipe(concat("style.css"))
    // .pipe(babel({
    //     presents:['@babel/env']
    // }))
    // .pipe(uglify())
    .pipe(gulp.dest('minifi'))
})