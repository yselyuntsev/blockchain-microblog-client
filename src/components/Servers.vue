<template>
  <div class="servers" v-if="servers.length">
    <p class="title">Список активных серверов</p>
    <div class="grid">
      <div
        class="server"
        @click="handleClick(server)"
        :class="{ selected: server === currentServer }"
        v-for="(server, index) in servers"
        :key="index"
      >
        <div class="icon">
          <i class="material-icons">dns</i>
        </div>
        <p class="name">{{ server }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { networkService } from "../services/network.service";

export default {
  data() {
    return {
      servers: [],
      currentServer: networkService.getServer()
    };
  },

  mounted() {
    networkService.allServers().then(servers => {
      this.servers = servers.nodes.sort();
    });
  },

  methods: {
    handleClick(server) {
      this.currentServer = server;
      networkService.changeServer(server);
    }
  }
};
</script>

<style scoped>
.servers {
  margin-top: 32px;
  display: flex;
  flex-direction: column;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
.title {
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  margin-bottom: 8px;
  color: var(--c-gray);
  text-decoration: none;
  text-align: center;
  margin-bottom: 16px;
}

.server {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 96px;
  height: 64px;
  border-radius: 4px;
  border: 1px solid var(--c-light);
  color: var(--c-gray);
  margin-bottom: 8px;
}

.icon:hover {
  background: var(--c-light);
}

.name {
  font-size: 10px;
  font-weight: 500;
  line-height: 12px;
  margin-bottom: 8px;
  color: var(--c-gray);
  text-decoration: none;
}

.server.selected .name,
.server.selected .icon {
  color: var(--c-blue);
  border-color: var(--c-blue);
}
</style>
