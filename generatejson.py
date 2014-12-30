import json
import os

GIF_FOLDER="./"
BACK_ONE_FOLDER=".."

class GenerateFolderStructure:
	def writeJSON(self, data):
		f = open('data.json', 'w')
		f.write(json.dumps(data))
		f.close()
		pass

	def generateListByFolder(self, folder):
		os.chdir(folder)
		result = os.listdir()
		os.chdir(BACK_ONE_FOLDER)
		return result

	def init(self):
		os.chdir(GIF_FOLDER)
		folders = os.listdir()
		data = {}

		for f in folders:
			checkDir = os.path.isdir(f)

			if (checkDir == True):
				i = self.generateListByFolder(f)
				data[f] = i

		self.writeJSON(data)
		pass

GenerateFolderStructure().init()