JS_FILES = FileList['src/*.js']
CSS_FILES = FileList['src/*.css']
PROJECT_NAME = "bulgakov"

task :default => [:js, :css]

task :js do
  sh "uglifyjs #{JS_FILES} -o build/#{PROJECT_NAME}.min.js -c -m"
end

task :css do
  sh "cat #{CSS_FILES} | cleancss -o build/#{PROJECT_NAME}.min.css"
end

task :clean do
  sh "rm build/*"
end