from setuptools import setup, find_packages

setup(
    name='my-package',
    version='1.0.0',
    packages=find_packages(),
    install_requires=[
        'aiohttp==3.7.3',
    ])
