const gulp = require("gulp");
const scss = require("gulp-sass")(require("sass"));
const babel = require("gulp-babel");
const sourcemaps = require("gulp-sourcemaps");
const fileinclude = require('gulp-file-include');
const htmlbeautify = require('gulp-html-beautify');
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
var minifyhtml = require('gulp-minify-html');
const browserSync = require("browser-sync").create();
const del = require("del");

const SRC_FOLDER = "./src";
const HTML_FOLDER = "./dist/html";

const SRC_PATH = {
    ASSETS: {
      FONTS: "./assets/fonts",
      IMAGES: "./assets/images",
      HTML: "./assets/html",
      SCSS: "./assets/scss",
      JS: "./assets/js",
      AJAX: "./assets/ajax",
      MODULES: "./assets/modules",
      DOC: "./assets/doc",
      GLTF: "./assets/gltf",
      MOVIES: "./assets/movies",
      DOWNLOADS: "./assets/downloads",
    },
    EJS: "./html",
  },
  DEST_PATH = {
    ASSETS: {
      FONTS: "./dist/assets/fonts",
      IMAGES: "./dist/assets/images",
      HTML: "./dist/assets/html",
      CSS: "./dist/assets/css",
      JS: "./dist/assets/js",
      AJAX: "./dist/assets/ajax",
      MODULES: "./dist/assets/modules",
      DOC: "./dist/assets/doc",
      GLTF: "./dist/assets/gltf",
      MOVIES: "./dist/assets/movies",
      DOWNLOADS: "./dist/assets/downloads",
    },
  },
  // 옵션
  OPTIONS = {
    outputStyle: "expanded",
    indentType: "space",
    indentWidth: 4,
    precision: 8,
  };

gulp.task("clean", function() {
  return del(["dist"]);
});
gulp.task('html', function () {
    return gulp.src(SRC_PATH.ASSETS.HTML + "/*.html") //src 폴더 아래의 모든 html 파일을
        .pipe(minifyhtml()) //minify 해서
        .pipe(gulp.dest(DEST_PATH.ASSETS.HTML)) //dist 폴더에 저장
        .pipe(browserSync.stream());
});
gulp.task("scss:compile", function () {
  return gulp
    .src(SRC_PATH.ASSETS.SCSS + "/*.scss")
    .pipe(sourcemaps.init())
    .pipe(scss(OPTIONS))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(DEST_PATH.ASSETS.CSS))
    .pipe(browserSync.stream());
});

gulp.task("js", () => {
  return gulp
    .src(SRC_PATH.ASSETS.JS + "/*.js")
    .pipe(babel())
    .pipe(uglify()) //자바스크립트 코드를 압축해 용량을 줄임
    .pipe(gulp.dest(DEST_PATH.ASSETS.JS))
    .pipe(browserSync.stream());
});

gulp.task("ajax", () => {
  return gulp
    .src(SRC_PATH.ASSETS.AJAX + "/*.js")
    .pipe(gulp.dest(DEST_PATH.ASSETS.AJAX))
    .pipe(browserSync.stream());
});

gulp.task("modules", () => {
  return gulp
    .src(SRC_PATH.ASSETS.MODULES + "/*.+(js|json|xml|txt)")    
    .pipe(gulp.dest(DEST_PATH.ASSETS.MODULES))
    .pipe(browserSync.stream());
});

gulp.task("images", () => {
  return gulp
    .src(SRC_PATH.ASSETS.IMAGES + "/**/*.+(png|jpg|jpeg|gif|ico)")
    .pipe(gulp.dest(DEST_PATH.ASSETS.IMAGES))
    .pipe(browserSync.stream());
});

gulp.task("svg", () => {
  return gulp
    .src(SRC_PATH.ASSETS.IMAGES + "/**/*.svg")
    .pipe(gulp.dest(DEST_PATH.ASSETS.IMAGES))
    .pipe(browserSync.stream());
});

gulp.task("fonts", () => {
  return gulp
    .src(SRC_PATH.ASSETS.FONTS + "/**/*.+(eot|otf|svg|ttf|woff|woff2)")
    .pipe(gulp.dest(DEST_PATH.ASSETS.FONTS))
    .pipe(browserSync.stream());
});

gulp.task("doc", () => {
  return gulp
    .src(SRC_PATH.ASSETS.DOC + "/**/*")
    .pipe(gulp.dest(DEST_PATH.ASSETS.DOC))
    .pipe(browserSync.stream());
});

gulp.task("gltf", () => {
  return gulp
    .src(SRC_PATH.ASSETS.GLTF + "/**/*")
    .pipe(gulp.dest(DEST_PATH.ASSETS.GLTF))
    .pipe(browserSync.stream());
});

gulp.task("movies", () => {
  return gulp
    .src(SRC_PATH.ASSETS.MOVIES + "/*")
    .pipe(gulp.dest(DEST_PATH.ASSETS.MOVIES))
    .pipe(browserSync.stream());
});

gulp.task("downloads", () => {
  return gulp
    .src(SRC_PATH.ASSETS.DOWNLOADS + "/**/**/**/**/*")
    .pipe(gulp.dest(DEST_PATH.ASSETS.DOWNLOADS))
    .pipe(browserSync.stream());
});

gulp.task("watch", function () {
  gulp.watch(SRC_PATH.ASSETS.HTML + "/**/*.html", gulp.series("html"));
  gulp.watch(SRC_PATH.ASSETS.SCSS + "/**/*.scss", gulp.series("scss:compile"));
  gulp.watch(SRC_PATH.ASSETS.JS + "/*.js", gulp.series("js"));
  gulp.watch(SRC_PATH.ASSETS.AJAX + "/*.js", gulp.series("ajax"));
  gulp.watch(SRC_PATH.ASSETS.MODULES + "/*.js", gulp.series("modules"));
  gulp.watch(SRC_PATH.ASSETS.IMAGES + "/**/*.+(png|jpg|jpeg|gif|ico)",gulp.series("images"));
  gulp.watch(SRC_PATH.ASSETS.IMAGES + "/**/*.svg", gulp.series("svg"));
  gulp.watch(SRC_PATH.ASSETS.FONTS + "/**/*.+(eot|otf|svg|ttf|woff|woff2)",gulp.series("fonts"));
  gulp.watch(SRC_PATH.ASSETS.DOC + "/**/*", gulp.series("doc"));
  gulp.watch(SRC_PATH.ASSETS.GLTF + "/**/*", gulp.series("gltf"));
  gulp.watch(SRC_PATH.ASSETS.MOVIES + "/*", gulp.series("movies"));
  gulp.watch(SRC_PATH.ASSETS.DOWNLOADS + "/**/**/**/**/*", gulp.series("downloads"));
});

gulp.task("browserSync", function () {
  browserSync.init({
    port: 8060,
    server: {
      baseDir: ["dist"],
      index: "./assets/html/main.html",
      open: true,
    },
  });
});

gulp.task(
  "build",
  gulp.series("html", "scss:compile","js","ajax","modules","images","svg","fonts","doc","gltf","movies","downloads", gulp.parallel("browserSync", "watch"))
);

gulp.task(
  "default",
  gulp.series("clean", "build", gulp.parallel("browserSync", "watch"))
);
