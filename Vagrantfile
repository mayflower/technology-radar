# -*- mode: ruby -*-
# vi: set ft=ruby :

personalization = File.expand_path("../Personalization", __FILE__)
load personalization

Vagrant::Config.run do |config|

  config.vm.box = "Radar"
  config.vm.box_url = "http://cloud-images.ubuntu.com/quantal/current/quantal-server-cloudimg-vagrant-i386-disk1.box"

  config.vm.forward_port 80, 8080

  config.vm.network :hostonly, $ip
 
  config.vm.share_folder "technology-radar", "/srv/www/technology-radar", $share_project, :create => true, :nfs => $use_nfs

  config.vm.customize ["modifyvm", :id, "--memory", $memory]

  config.vm.provision :puppet do |puppet|
    puppet.manifests_path = "puppet/manifests"
    puppet.manifest_file = "radar.pp"
    puppet.module_path = "puppet/modules"
  end

end
