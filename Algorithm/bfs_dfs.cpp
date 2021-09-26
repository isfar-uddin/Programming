#include <iostream>
#include <vector>
#include <queue>

using namespace std;

vector<int> adj[100];
int visited[100];
queue<int> Q;

void bfs(int s, int n);
void dfs(int s);

int main()
{
  int n, temp;
  cin >> n;
  for (int i = 0; i < n; i++)
  {
    for (int j = 0; j < n; j++)
    {
      cin >> temp;
      if (temp == 1)
      {
        adj[i].push_back(j);
      }
    }
  }

  for (int i = 0; i < n; i++)
  {
    visited[i] = 0;
  }

  cout << "BFS: " << endl;
  bfs(0, 10);

  for (int i = 0; i < n; i++)
  {
    visited[i] = 0;
  }
  cout << endl << "DFS: " << endl;
  dfs(0);
}

void bfs(int s, int n)
{
  Q.push(s);
  visited[s] = 1;

  while (!Q.empty())
  {
    int u = Q.front();
    Q.pop();
    cout << u << " ";
    for (int i = 0; i < adj[u].size(); i++)
    {
      if (visited[adj[u][i]] == 0)
      {
        int v = adj[u][i];
        visited[v] = 1;
        Q.push(v);
      }
    }
  }
}

void dfs(int s)
{
  if (visited[s])
    return;

  cout << s << " ";

  visited[s] = 1;
  for (int i = 0; i < adj[s].size(); i++)
  {
    dfs(adj[s][i]);
  }
}