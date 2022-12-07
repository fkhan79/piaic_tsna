# piaic_tsna
PIAIC TypeScript Node JS assignments repo

Creating an NPX package
--Install npx
	npm install -g npx
--Create a new account on https://www.npmjs.com/
--Create your application using 
	npm init -y
--Configure TSC Config using 
	 tsc --init
--Open package.json and change the following parameters
	1. name:<Your Package Name>
	2. Add a new parameter "type" and set its value to "module"
	3. Add a new parameter
		 "bin": {
			"module_name":"bin/<executable js file genreated by ts compiler>.js"
		  }
	4. Add required Node dependencies in Dependency and DevDependency sections.
	5. Create a new folder named bin in project root directory.
	6. Open TSConfig:
		set "target": "ES2022",
		set "module": "NodeNext",
		set "moduleResolution": "NodeNext",
		set "outDir": "./bin",//This will automatically create all the js filed in bin folder,
	7. Create the required TS files and wrote the code. Besure to add the following line in the start of every ts file
		#! /usr/bin/env node
	8. Compile the code using tsc command.
	9. Install the generated module in npm global directory using command "npm i -g"
	10. Test the project using command "npx <PackageName>".
	11. After successfull execution prepare it to move it to NPMJS environment to be available to everyone using npx command.
		a. Login to NPMJS remotely using "npm login".
		b. After a successful login , execute "npm publish". This will upload the newly built Node Module to NPMJS environment using your provided credentials.
		c. Try testing is using command using "npx <module_name>".
		