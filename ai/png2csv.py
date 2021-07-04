#This source code change a image file to a csv file.
import numpy as np
from PIL import Image
import csv
import itertools

im = np.array(Image.open('test.png')) #open image

#write a csv file
with open('data.csv', 'w') as file:
    writer = csv.writer(file, lineterminator='\n')
    writer.writerow(itertools.chain.from_iterable(list(itertools.chain.from_iterable(im.tolist()))))
