http_path = "/"
css_dir = "dist/assets/css"
sass_dir = "sass"
images_dir = "dist/assets/img"
javascripts_dir = "dist/assets/js"
output_style = :compressed
line_comments = false
disable_warnings = true

require 'autoprefixer-rails'

on_stylesheet_saved do |file|
  css = File.read(file)
  File.open(file, 'w') do |io|
    io << AutoprefixerRails.process(css)
  end
end
