module.exports = function(grunt){

	grunt.initConfig({
		watch:{
			files: ['index.html'],
			tasks: 'pat'
		}
	});
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('pat' , function(){
		grunt.log.writeln('Keep Going!');
	});
}