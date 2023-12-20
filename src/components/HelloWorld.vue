<template>
  <div class="app">
    <div class="container">
      <!--      服务器侧边栏-->
      <nav>
        <div class="nav-left">
          <div class="tutorialContainer">
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              background-color=" hsl(220 calc(1 * 6.5%) 18% / 1)"
              @select="handleSelect"
              style="padding: 5px"
            >
              <el-menu-item
                index="1"
                style="
                  height: 46px;
                  line-height: 44px;
                  border-radius: 50%;
                  padding: 0;
                "
              >
                <el-avatar :size="40" :src="circleUrl"></el-avatar>
              </el-menu-item>
              <el-menu-item
                index="2"
                style="
                  height: 46px;
                  line-height: 44px;
                  border-radius: 50%;
                  padding: 0;
                "
              >
                <el-avatar :size="40" :src="circleUrl"></el-avatar>
              </el-menu-item>
              <el-menu-item
                index="3"
                style="
                  height: 46px;
                  line-height: 44px;
                  border-radius: 50%;
                  padding: 0;
                "
              >
                <i class="el-icon-plus" style="margin-left: 5px"></i>
              </el-menu-item>
            </el-menu>
          </div>
        </div>
      </nav>
      <!--      右侧内容-->
      <div class="base">
        <div class="content">
          <div class="sidebar">
            <div class="sidebar-header">
              <el-dropdown trigger="click">
                <div class="el-dropdown-link sidebar-header-box">
                  <span style="font-size: larger">xxx的服务器</span>
                  <span>
                    <i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                </div>
                <el-dropdown-menu class="sidebar-header-alert">
                  <el-dropdown-item icon="el-icon-plus"
                    >邀请其他人</el-dropdown-item
                  >
                  <el-dropdown-item icon="el-icon-circle-plus"
                    >创建类别</el-dropdown-item
                  >
                </el-dropdown-menu>
              </el-dropdown>
            </div>
            <div class="sidebar-body">
              <div>
                <el-tree
                  class="tree"
                  :data="data"
                  :props="defaultProps"
                  accordion
                  @node-click="handleNodeClick"
                >
                </el-tree>
              </div>
            </div>
            <div class="sidebar-footer">
              <div class="users">
                <div class="avatarWrapper">
                  <div>
                    <el-avatar :size="40" :src="circleUrl"></el-avatar>
                  </div>
                  <div class="nameTag">
                    <div>xxx</div>
                    <div>xxxxxx</div>
                  </div>
                </div>
                <div class="switchBtn">
                  <el-tooltip
                    class="item"
                    effect="dark"
                    :content="microphoneBtn ? '麦克风静音' : '取消麦克风静音'"
                    placement="top"
                  >
                    <el-button
                      type="text"
                      :icon="
                        microphoneBtn
                          ? 'el-icon-microphone'
                          : 'el-icon-turn-off-microphone'
                      "
                      size="mini"
                      class="usersBtn"
                      @click="clickMicrophone"
                    ></el-button>
                  </el-tooltip>

                  <el-tooltip
                    class="item"
                    effect="dark"
                    :content="headsetBtn ? '耳机静音' : '取消耳机静音'"
                    placement="top"
                  >
                    <el-button
                      type="text"
                      :icon="headsetBtn ? 'el-icon-headset' : 'el-icon-headset'"
                      size="mini"
                      class="usersBtn"
                      @click="clickHeadset"
                    ></el-button>
                  </el-tooltip>
                  <el-tooltip
                    class="item"
                    effect="dark"
                    content="用户设置"
                    placement="top"
                  >
                    <el-button
                      type="text"
                      icon="el-icon-s-tools"
                      size="mini"
                      class="usersBtn"
                      @click="clickTools"
                    ></el-button>
                  </el-tooltip>
                </div>
              </div>
            </div>
          </div>
          <div class="chat"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      microphoneBtn: true,
      headsetBtn: true,
      count: 0,
      defaultProps: {
        children: "children",
        label: "label",
      },
      data: [
        {
          id: 1,
          label: "大厅1",
          children: [
            {
              label: "aaa",
              children: [],
            },

            {
              label: "bbb",
              children: [],
            },
          ],
        },
        {
          id: 2,
          label: "大厅2",
          children: [],
        },
        {
          id: 3,
          label: "大厅3",
          children: [],
        },
      ],
      circleUrl:
        "data:image/jpeg;base64,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",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handleNodeClick() {
      console.log("handleNodeClick");
    },
    clickMicrophone() {
      this.microphoneBtn = !this.microphoneBtn;
    },
    clickHeadset() {
      this.headsetBtn = !this.headsetBtn;
    },
    clickTools() {
      console.log("clickTools");
    },
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
}
a {
  color: #42b983;
}
.app {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: hsl(225 calc(1 * 6.3%) 12.5% / 1);
  display: flex;
  flex-direction: column;
}
.container {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  display: flex;
}
.nav-left {
  overflow: hidden;
  padding-right: 0;
}
.tutorialContainer {
  position: relative;
  width: 57px;
  height: 100%;
  background-color: #2f3136;
  color: white;
  display: flex;
  flex-direction: column;
}
.base {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  flex-grow: 1;
}
.content {
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
  min-width: 0;
  min-height: 0;
  flex: 1 1 auto;
}
.sidebar {
  display: flex;
  flex-direction: column;
  min-height: 0;
  width: 240px;
  flex: 0 0 auto;
  overflow: hidden;
  background: hsl(220 calc(1 * 6.5%) 18% / 1);
}
.sidebar-header {
  height: 34px;
  line-height: 34px;
}
.sidebar-header-alert {
  background: hsl(220 calc(1 * 6.5%) 18% / 1);
}
.el\-dropdown\-link {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.tree {
  background: hsl(220 calc(1 * 6.5%) 18% / 1);
}

.sidebar-footer {
  width: 100%;
  position: fixed;
  bottom: 0;
  flex: 0 0 auto;
  background-color: hsl(228 calc(1 * 6.7%) 14.7% / 1);
  z-index: 1;
}
.users {
  height: 52px;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  align-items: center;
  padding: 0 8px;
  flex-shrink: 0;
  margin-bottom: 1px;
}
.avatarWrapper {
  align-items: center;
  flex-direction: row;
  display: flex;
  margin-left: -2px;
  min-width: 120px;
  padding-left: 2px;
  margin-right: 6px;
}
.nameTag {
  -webkit-user-select: text;
  -moz-user-select: text;
  user-select: text;
  flex-grow: 1;
  margin-right: 4px;
  min-width: 0;
}
.switchBtn {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.usersBtn {
  margin-left: 4px;
  padding: 7px 8px;
  color: hsl(215 calc(1 * 8.8%) 73.3% / 1);
}
</style>
