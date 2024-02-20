## Clarifications et aide supplémentaire

- Jusqu'à présent, nous avons toujours utilisé la job `checkout` avec le code de base provenant de CircleCI. Il est cependant possible de simplement faire un git clone en _lignes de commandes_ du (ou des) repo(s) que vous cloner.

- À chaque commande (chaque ligne `run`) dans une job, CircleCI déclenche un nouveau processus à la racine du répertoire. Si vous souhaitez vous déplacer (avec la commande `cd`) puis faire une autre commande dans le répertoire, vous pouvez chaîner le déplacement et la commande avec &&.

  - Exemple: `cd 3w5-h24-tp2-frontend && npm install`

- Il est possible d'utiliser plusieurs **orbs** dans un même fichier de configuration yml.

- Lors d'un `cp` sous linux, les fichiers cachés (comme .env) sont omis. utilisez la _switch_ -rT pour votre copie des fichiers de build vers public.

- Chaque `job` fait usage d'une nouvelle machine pour effectuer son travail. Cela veut dire que le contenu d'une machine lors d'une job ne peut être utilisé dans la suivante. Cependant, il est possible d'utiliser des [workspace](https://circleci.com/blog/deep-diving-into-circleci-workspaces/) pour faire ce travail. La job `integrationFrontend` peut persister son résultat dans une workspace pour la job de déploiement avec ce _step_:

```
- persist_to_workspace:
          root: .
          paths:
            - 3w5-h24-tp2-backend-test1
```

- La job deploy pourra récupérer le contenu du workspace avec ce step:

```
- attach_workspace:
          at: .
```