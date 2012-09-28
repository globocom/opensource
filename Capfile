# encoding: utf-8
require 'bundler/setup'

set :app_dir, "/srv/gcom"

task :prod do
  set :user, "ubuntu"
  set :env, 'prod'
  server "opensource.globo.com", :master
end


task :setup, :roles => :master do
  run "
    #{sudo} ln -sf /usr/share/zoneinfo/America/Sao_Paulo /etc/localtime && # dpkg-reconfigure tzdata
    #{sudo} aptitude update -y &&
    #{sudo} aptitude full-upgrade -y &&
    #{sudo} aptitude install -y rsync ruby-full rubygems libxslt-dev libxml2-dev &&
    echo gem: --no-rdoc --no-ri | #{sudo} tee /etc/gemrc &&
    #{sudo} REALLY_GEM_UPDATE_SYSTEM=1 gem update --system &&
    #{sudo} gem install chef --no-rdoc --no-ri &&
    #{sudo} aptitude install -y tree htop vim-full screen"
  upload File.expand_path("~/.ssh/globocom_github"), ".ssh/id_rsa", :via => :scp
  run "chmod 0600 ~/.ssh/id_rsa"
  run "#{sudo} mkdir -p /var/www/.ssh && #{sudo} chown www-data:www-data -R /var/www"
  run "#{sudo} cp ~/.ssh/id_rsa /var/www/.ssh/id_rsa"
  run "#{sudo} chown www-data:www-data /var/www/.ssh/id_rsa"
end

namespace :chef do

  desc "Sync chef cookbooks on server"
  task :sync, :roles => :master do
    run "#{sudo} mkdir -p #{app_dir}/chef-repo && #{sudo} chown -R #{user} #{app_dir}/chef-repo"
    roles[:master].each do |server|
      `rsync -avz -e ssh "./chef-repo/" "#{user}@#{server}:#{app_dir}/chef-repo" --exclude ".git" --delete`
    end
  end

  desc "Run chef-solo on server"
  task :solo, :roles => :master do
    sync
    run "#{sudo} chef-solo -c #{app_dir}/chef-repo/config/solo.rb -j #{app_dir}/chef-repo/config/#{env}.json"
  end

  desc "Just echo chef command :)"
  task :echo do
    puts "chef-solo -c #{app_dir}/chef-repo/config/solo.rb -j #{app_dir}/chef-repo/config/#{env}.json"
  end

end

# vi: ft=ruby:
