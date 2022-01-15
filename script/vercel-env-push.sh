# set -a
# . $1
# set +a
# env_vars=$(cat "$1" | sed s/=.*//g)
# for key in $(echo $env_vars); do
#     sleep 5 #For vercel API
#     vc env rm ${key} $2 -y
#     echo "${!key}" | vc env add plain $key $2
# done
# exit 0
