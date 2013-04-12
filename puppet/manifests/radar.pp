node default {
  class { 'nodejs':
    version => 'stable',
  }

  package { 'mongodb':
    ensure => 'present',
  }

  service { 'mongodb':
    ensure => 'running',
    require => Package['mongodb']
  }
}
