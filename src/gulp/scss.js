const {
    src, series, dest
} = require('gulp')

const sass = require('gulp-dart-sass')
const sourcemaps = require('gulp-sourcemaps')
const autoprefixer = require('gulp-autoprefixer')

function compilestyle() {
    return src('./src/scss/style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            includePaths: ['node_modules'],
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(autoprefixer('last 2 version'))
        .pipe(sourcemaps.write('.'))
        .pipe(dest('./css'))
}

const css = series(compilestyle)
exports.tasks = css