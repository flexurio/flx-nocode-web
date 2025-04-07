TIME := $(shell date +"%Y.%m.%d.%H.%M-GMT7")

copy:
	rm -rf web/assets/asset/configuration && cp -r configuration web/assets/asset/

update:
	sed -i '50c\<script src="main.dart.js?v=$(TIME)" type="application/javascript"></script>' /home/DOCKER/NGINX/html/NOCODE-MF-MARKETING/build/web/index.html

move:
	rm -rf /home/DOCKER/NGINX/html/NOCODE-MF-MARKETING/build/web/assets/asset/configuration
	cp -r configuration /home/DOCKER/NGINX/html/NOCODE-MF-MARKETING/build/web/assets/asset

fetch:
	git reset --hard
	git fetch $(CI_REPOSITORY_URL) +refs/heads/*:refs/remotes/origin/*
	git checkout $(CI_COMMIT_TAG)
	git submodule foreach --recursive git reset --hard
	git config --global url."https://$(ACCESS_TOKEN)@gitlab.com".insteadOf "https://gitlab.com"
	git submodule update --remote
