#PIAIC TypeScript Node JS assignments repo
Create a new TypeScript Project
1. mkdir <project_folder_name>
2. cd <project_folder_name>
3. mkdir src //for source ts files
4. npm init -y //for initilizing package.json
6. tsc -init //for initilizing typescript configuration
Update the configurations for your newly created typescript project.
1. Open package.json and add 
 "type": "module",
  "bin": {
    "<package_name>": "./bin/SMS.js" //executable path for js file for NPX
  }
 2. Open tsconfig.json and update the following parameters
  "target": "ES2022",
  "module": "NodeNext",
  "moduleResolution": "NodeNext",
   "outDir": "./bin",//this will output all the transpiled JS files in outdir folder.
 3. Create a new TS file under src folder.
 4. Add the following line at tha start of your TS file, if you are intended to use the packege as a self executed NPX application.
 #! /usr/bin/env node
 5. Start coding your application

Add inquirer to your module from user prompt and input
1. npm i inquirer
2. npm i @types/inquirer

Creating a working TS Application and NPX package
1.	Install npx “npm install -g npx”
2.	Create a new account on https://www.npmjs.com/
		a.Create your application using “npm init -y”.
3.	Configure TSC Config using “tsc –init”
4.	Open package.json and change the following parameters
		a.name:<Your Package Name>.
		b.Add a new parameter "type" and set its value to "module".
		c. Add a new parameter "bin": {"module_name":"bin/<executable js file genreated by ts compiler>.js"}.
		d.Add required Node dependencies in Dependency and DevDependency sections.
		e.Create a new folder named bin in project root directory.
		f.Open TSConfig:
			i.set "target": "ES2022".
			ii.set "module": "NodeNext".
			iii.set "moduleResolution": "NodeNext".
			iv.set "outDir": "./bin",//This will automatically create all the js filed in bin folder.
5.	Create the required TS files and wrote the code. Besure to add the following line in the start of every ts file “#! /usr/bin/env node”.
6.	Compile the code using tsc command.
7.	Install the generated module in npm global directory using command "npm i -g"
8.	Test the project using command "npx <PackageName>".
9.	After successfull execution prepare it to move it to NPMJS environment to be available to everyone using npx command.
		a.Login to NPMJS remotely using "npm login".
		b.After a successful login , execute "npm publish". This will upload the newly built Node Module to NPMJS environment using your provided credentials.
		c.Try testing is using command using "npx <module_name>".
