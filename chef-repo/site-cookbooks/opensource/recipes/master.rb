# Cookbook Name:: Gcom Open Source
# Recipe:: master

include_recipe "nginx"

# Deploy
deploy_revision "/var/www/gcom-opensource" do
  user "www-data"
  group "www-data"
  repository_cache ".cached-copy"
  repository "git@github.com:globocom/open-source.git"
  revision "master"
  enable_submodules false
  migrate false
  purge_before_symlink([])
  create_dirs_before_symlink([])
  symlinks({})
  symlink_before_migrate.clear
  shallow_clone false
  action :force_deploy
end

template "#{node[:nginx][:dir]}/sites-available/gcom-opensource" do
  source "nginx_site.erb"
  mode 0755
  notifies :restart, "service[nginx]"
end

nginx_site "default" do
  enable false
end

nginx_site "gcom-opensource"
