Vagrant::Config.run do |config|
  config.vm.box = "Radar"
  config.vm.box_url = "http://cloud-images.ubuntu.com/quantal/current/quantal-server-cloudimg-vagrant-i386-disk1.box"

  config.vm.provision :puppet do |puppet|
    puppet.manifests_path = "manifests"
    puppet.manifest_file = "radar.pp"
    puppet.module_path = "modules"
  end

end
