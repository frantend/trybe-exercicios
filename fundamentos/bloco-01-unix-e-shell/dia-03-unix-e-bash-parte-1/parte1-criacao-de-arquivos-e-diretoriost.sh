#1-Crie um diretorio chamado unix_tests e navegue ate ele.
MacBook-Pro-de-Francine:dia-03-unix-e-bash-parte-1 fran$ mkdir unix_tests
MacBook-Pro-de-Francine:dia-03-unix-e-bash-parte-1 fran$ cd unix_tests/

MacBook-Pro-de-Francine:unix_tests fran$ #2-Crie um arquivo de texto com o nome trybe.txt.
MacBook-Pro-de-Francine:unix_tests fran$ touch trybe.txt

MacBook-Pro-de-Francine:unix_tests fran$ #3-Crie uma copia do arquivo trybe.txt com o nome trybe_backup.txt.
MacBook-Pro-de-Francine:unix_tests fran$ cp trybe.txt trybe_backup.txt

MacBook-Pro-de-Francine:unix_tests fran$ #4-Renomeie o arquivo trybe.txt.
MacBook-Pro-de-Francine:unix_tests fran$ mv trybe.txt trybe_renomeado.txt

MacBook-Pro-de-Francine:unix_tests fran$ #5-Dentro de unix_tests, crie um novo diretorio chamado backup.
MacBook-Pro-de-Francine:unix_tests fran$ mkdir backup

MacBook-Pro-de-Francine:unix_tests fran$ #6-Mova o arquivo trybe_backup.txt para o diretório backup.
MacBook-Pro-de-Francine:unix_tests fran$ mv trybe_backup.txt backup

MacBook-Pro-de-Francine:unix_tests fran$ #7-Dentro de unix_tests , crie um novo diretório chamado backup2 .
MacBook-Pro-de-Francine:unix_tests fran$ mkdir backup2

MacBook-Pro-de-Francine:unix_tests fran$ #8-Mova o arquivo trybe_backup.txt da pasta backup para a pasta backup2.
MacBook-Pro-de-Francine:unix_tests fran$ cd backup
MacBook-Pro-de-Francine:backup fran$ mv trybe_backup.txt ../backup2

MacBook-Pro-de-Francine:backup fran$ cd ../

MacBook-Pro-de-Francine:unix_tests fran$ #9-Apaque a pasta backup.
MacBook-Pro-de-Francine:unix_tests fran$ rmdir backup

MacBook-Pro-de-Francine:unix_tests fran$ #10-Renomeie a pasta backup2 para backup.
MacBook-Pro-de-Francine:unix_tests fran$ mv backup2 backup

MacBook-Pro-de-Francine:unix_tests fran$ #11-Veja qual o path completo do diretório atual e liste todos os arquivos dentro dele.
MacBook-Pro-de-Francine:unix_tests fran$ pwd
/Users/fran/projetos/trybe-exercicios/fundamentos/bloco-01-unix-e-shell/dia-03-unix-e-bash-parte-1/unix_tests
MacBook-Pro-de-Francine:unix_tests fran$ ls -a
.			backup
..			trybe_renomeado.txt

MacBook-Pro-de-Francine:unix_tests fran$ #12-Apague o diretorio backup.
MacBook-Pro-de-Francine:unix_tests fran$ rm -rf backup

MacBook-Pro-de-Francine:unix_tests fran$ #13-Limpe o terminal.
MacBook-Pro-de-Francine:unix_tests fran$ clear

MacBook-Pro-de-Francine:unix_tests fran$ #14-Mostre na tela as 5 primeiras skills do arquivo skills.txt.
MacBook-Pro-de-Francine:unix_tests fran$ head -5 skills.txt 
Internet
Unix
Bash
HTML
CSS

MacBook-Pro-de-Francine:unix_tests fran$ #15-Mostre na tela as 4 ultimas skills do arquivo skills.txt.
MacBook-Pro-de-Francine:unix_tests fran$ tail -4 skills.txt 
CSS
JavaScript
React
SQL

MacBook-Pro-de-Francine:unix_tests fran$ #16-Apague todos os arquivos que terminem em .txt.
MacBook-Pro-de-Francine:unix_tests fran$ rm *.txt
