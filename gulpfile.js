var gulp 			= require( 'gulp' ),
	sass 			= require( 'gulp-sass' ),
	postcss      	= require( 'gulp-postcss' ),
	autoprefixer 	= require( 'autoprefixer' );

var sourse = 'source/scss/',
	dist = 'assets/css/';

//
gulp.task( 'sass', function( ) {
	return gulp.src( [ /*'!' + sourse + 'style.{scss,sass}', 
						'!' + sourse + 'default.{scss,sass}', */
						sourse + '**/*.{scss,sass}'] )
				.pipe( sass( ).on( 'error', sass.logError ) )
				.pipe( postcss ( [ autoprefixer( ) ] ) )
				.pipe( gulp.dest( dist ) );
} );

//
/*gulp.task( 'main-styles', function( ) {
	return gulp.src( sourse + 'style.{scss,sass}' )
				.pipe( sass( { errLogToConsole: true, outputStyle: 'compact' } ).on( 'error', sass.logError ) )
				.pipe( postcss ( [ autoprefixer( ) ] ) )
				.pipe( gulp.dest( './' ) );
} );*/

//
gulp.task( 'autoprefixer', function( ) {
    return gulp.src( dist + '**/*.css' )
				.pipe( postcss ( [ autoprefixer( ) ] ) )
				.pipe( gulp.dest( dist ) );
} );

//
gulp.task( 'default', function( ) {
	gulp.start( 'sass'/*, 'main-styles'*/ );
	gulp.watch( sourse + '**/*.{scss,sass}', [ 'sass'/*, 'main-styles'*/ ] );
} );