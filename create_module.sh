if [$# -ne 2];then
  echo "Usage: $0 <file_name>"
  exit 1
fi

filename="$1"
my_route="$(pwd)/src"

content_router="import { Router } from 'express'
const router = Router()
export default router\n
"

cd "$my_route/route"
echo "$content_router" > "$filename.router.js"

cd "../controller"
echo "// this is a controller" > "$filename.controller.js"


echo "Created $filename module"