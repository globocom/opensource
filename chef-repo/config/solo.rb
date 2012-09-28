ROOT_PATH = File.expand_path('../../', __FILE__)

file_cache_path "/tmp"
cookbook_path ["#{ROOT_PATH}/cookbooks", "#{ROOT_PATH}/site-cookbooks"]
role_path "#{ROOT_PATH}/roles"
log_level :info
log_location STDOUT
