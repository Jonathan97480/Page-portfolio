const {
    task, parallel, watch
} = require('gulp')

const scss = require('./src/gulp/scss')

/* tache par default */
task('default', parallel(scss.tasks))

/*  */
task('watch', function(){
    watch(['./src/scss/**/*.scss'],scss.tasks)
})
