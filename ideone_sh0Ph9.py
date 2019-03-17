from os import listdir
from os.path import isfile, join
import sys
import subprocess


def main(text_input):
    onlyfiles = [f for f in listdir("code_dir") if isfile(join("code_dir", f))]
    matches = {}
    for word in text_input.split(" "):
        for files in onlyfiles:
            if not files in matches:
                match = {}
                match['count'] = 0
                match['name'] = files
                matches[files] = match
            if word in files:
                matches[files]['count'] += 1
    sorted(matches.items(), key=lambda x: x.count, reverse=True)
    print matches[matches.keys()[0]]['name']
    process = subprocess.Popen('./code_dir/' + matches[matches.keys()[0]]['name'], stdout=subprocess.PIPE)
    output, error = process.communicate()

if __name__ == '__main__':
    print(str(sys.argv[1:]))
    main(" ".join(sys.argv[1:]))