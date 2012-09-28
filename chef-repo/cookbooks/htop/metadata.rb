maintainer        "Jose Peleteiro"
maintainer_email  "jose@peleteiro.net"
license           "Apache 2.0"
description       "Installs htop"
version           "0.1.0"

recipe "htop", "Installs htop"

%w{ ubuntu debian }.each do |os|
  supports os
end
