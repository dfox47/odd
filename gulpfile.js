// npm install -g gulp-cli
// npm install gulp vinyl-ftp gulp-util --save-dev

const fs              = require('fs')
const config          = JSON.parse(fs.readFileSync('../config.json'))
const ftp             = require('vinyl-ftp')
const gulp            = require('gulp')
const gutil           = require('gulp-util')

// FTP config
const host            = config.host
const password        = config.password
const port            = config.port
const user            = config.user

const remoteFolder    = '/odd.foxartbox.com/public_html/'
const localFolder     = 'dist/'

function getFtpConnection() {
	return ftp.create({
		host:           host,
		log:            gutil.log,
		password:       password,
		parallel:       3,
		port:           port,
		timeout:        99999999,
		user:           user
	});
}

const conn = getFtpConnection()



gulp.task('dist', function () {
	return gulp.src(localFolder + '**/*')
		.pipe(conn.dest(remoteFolder))
})

gulp.task('watch', function() {
	gulp.watch(localFolder + '**/*', gulp.series('dist'))
})

gulp.task('default', gulp.series('watch'))