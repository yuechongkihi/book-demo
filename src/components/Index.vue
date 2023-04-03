<template>
  <div>
    <el-carousel :height="computeHeight">
      <el-carousel-item v-for="(item, index) in sliders" :key="index">
        <img :src="item.img" class="slider_img" />
      </el-carousel-item>
    </el-carousel>
    <div class="solve head-label">
      <div style="text-align: center;" class="font_size_24">
        在这里你可以获得什么
      </div>
    </div>
    <!-- 盒子 -->
    <div class="border_parent">
      <el-row :gutter="10">
        <el-col :xs="12" :sm="12" :md="6">
          <div class="border">
            <div class="border_img_parent">
              <img :src="images[1].img" class="img_border" />
            </div>
            <div class="border_title">{{ images[1].title }}</div>
            <div class="border_content_one">{{ images[1].content[0] }}</div>
            <div class="border_content_two">{{ images[1].content[1] }}</div>
          </div>
        </el-col>
        <el-col :xs="12" :sm="12" :md="6">
          <div class="border">
            <div class="border_img_parent">
              <img :src="images[2].img" class="img_border" />
            </div>
            <div class="border_title">{{ images[2].title }}</div>
            <div class="border_content_one">{{ images[2].content[0] }}</div>
            <div class="border_content_two">{{ images[2].content[1] }}</div>
          </div>
        </el-col>
        <el-col :xs="12" :sm="12" :md="6">
          <div class="border">
            <div class="border_img_parent">
              <img :src="images[3].img" class="img_border" />
            </div>
            <div class="border_title">{{ images[3].title }}</div>
            <div class="border_content_one">{{ images[3].content[0] }}</div>
            <div class="border_content_two">{{ images[3].content[1] }}</div>
          </div>
        </el-col>
        <el-col :xs="12" :sm="12" :md="6">
          <div class="border" style="margin-right: 0">
            <div class="border_img_parent">
              <img :src="images[4].img" class="img_border" />
            </div>
            <div class="border_title">{{ images[4].title }}</div>
            <div class="border_content_one">{{ images[4].content[0] }}</div>
            <div class="border_content_two">{{ images[4].content[1] }}</div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="product_pc_one">文章分类</div>
    <bookContent></bookContent>
  </div>
</template>
<script>
import bookContent from "./content.vue"
export default {
  name: "Index",
  components:{
    bookContent
  },
  data() {
    return {
      sliders: [],
      images: [
        {
          img:
            "https://images.zhishen.net.cn/college/20210825/20210825090657436.png",
          title: "学习权益",
          content: ["7大创新模块", "50堂创新课程"]
        },
        {
          img:
            "https://images.zhishen.net.cn/college/20210825/20210825090657436.png",
          title: "陪伴式成长",
          content: ["陪伴式成长", "陪伴式成长"]
        },
        {
          img:
            "https://images.zhishen.net.cn/college/20210825/20210825090657436.png",
          title: "幸会导师",
          content: ["幸会导师", "7大创新模块"]
        },
        {
          img:
            "https://images.zhishen.net.cn/college/20210825/20210825090657436.png",
          title: "陪伴式成长",
          content: ["幸会导师", "幸会导师"]
        },
        {
          img:
            "https://images.zhishen.net.cn/college/20210825/20210825090657436.png",
          title: "陪伴式成长",
          content: ["幸会导师", "幸会导师"]
        }
      ],
      products: [
        {
          img: [
            require("../../static/other/手机端商品.png"),
            require("../../static/other/手机端商品SKU.png")
          ],
          title: "手机端商品展示 满足多规格显示",
          content: [
            "商品热销分类显示 分类导航显示所有分类",
            "热销商品优先排序 商城首页轮播自定义",
            "商品多规格多价格展示 商品直接在线购买支付"
          ]
        }
      ],
      manages: [
        {
          img:
            "https://images.zhishen.net.cn/college/20210825/20210825090657436.png",
          title: "小程序+公众号一体化微信商城管理平台",
          content: [
            "公众号菜单自定义发布 微信图文图片素材管理",
            "商品多规格SKU自定义上架 分类自定义设置",
            "用户管理 用户自定义标签，了解用户消费行为",
            "订单管理 实时掌握商品交易详情",
            "物流闪电发货 实时掌握物流追踪状态"
          ]
        }
      ],
      spec: {
        img: require("../../static/other/arrow.png"),
        product: [
          {
            img: require("../../static/other/手指.png"),
            title: "一键建铺",
            contents: ["注册一键创建店铺", "开启您的专属店铺"]
          },
          {
            img: require("../../static/other/店铺管理.png"),
            title: "店铺装扮",
            contents: ["不同业态打造不同风格", "给用户流畅的视觉体验"]
          },
          {
            img: require("../../static/other/数据分析.png"),
            title: "营销分析",
            contents: ["多玩法提升品牌知名度", "优惠福利刺激付费转化"]
          },
          {
            img: require("../../static/other/助力零售.png"),
            title: "助力零售",
            contents: ["提供专业产品服务", "帮助线下零售业态提升营销"]
          }
        ]
      },
      company: [
        "企业从事于：互联网整合营销，互联网软件开发，微信公众号，小程序，微商城开发，提供技术支持，是所创业型服务研发公司。",
        "核心理念：打造移动电子商务平台 ，提供一键式部署，实现简单可靠稳定的商务平台。",
        "团队作风：我们来自不同地区，因梦想相聚，组建团队，每个团队成员如同人的五官，缺一不可。",
        "企业精神：以实力为盾，自信为矛。我们坚信成功靠朋友，成长靠对手，成就靠团体。"
      ],
      carousel_height: "550px"
    };
  },
  methods: {},
  mounted() {
    this.sliders = [
      {
        img:
          "https://images.zhishen.net.cn/college/20210825/20210825090657436.png"
      },
      {
        img:
          "https://images.zhishen.net.cn/college/20210825/20210825090657436.png"
      },
      {
        img:
          "https://images.zhishen.net.cn/college/20210825/20210825090657436.png"
      },
      {
        img:
          "https://images.zhishen.net.cn/college/20210825/20210825090657436.png"
      }
    ];
  },
  computed: {
    //计算高度
    computeHeight() {
      let screenHeight = document.body.clientWidth;
      if (screenHeight > 415) {
        return "550px";
      } else {
        return "250px";
      }
    },
    computeArrowImg() {
      let screenHeight = document.body.clientWidth;
      if (screenHeight > 450) {
        return require("../../static/other/arrow.png");
      } else {
        return require("../../static/other/arrow_down.png");
      }
    }
  }
};
</script>

<style scoped>
.border_parent {
  width: 90%;
  margin: auto;
}

.slider_img {
  height: 550px;
  width: 100%;
}

.solve {
  margin-top: 30px;
  margin-bottom: 10px;
}

.border {
  border-radius: 6px;
  border: 1px solid #ebeef5;
  height: auto;
  margin: 10px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.border_one {
  margin-left: 0;
}

.border_img_parent {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}

.product_mobile_content {
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.product_mobile_img {
  width: 50%;
}

.product_mobile_title {
  font-weight: bold;
  text-align: center;
}

.product_pc_one {
  text-align: center;
  min-height: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.font_size_30 {
  font-size: 1.875em;
}

.product_font_style {
  font-size: 1.125em;
}

.product_pc_img {
  width: 100%;
}

.product_pc_img_div {
  width: 50%;
  float: left;
  display: flex;
  align-items: center;
}

.product_pc {
  display: flex;
  width: 90%;
  margin: 20px auto;
  background: #f2f6fc;
  align-items: center;
}

.product_spec_title {
  margin-top: 30px;
  margin-bottom: 10px;
}

.product_spec_parent {
  display: flex;
  width: 90%;
  margin: 20px auto;
  align-items: center;
  height: auto;
}

.cooperation_parent {
  display: flex;
  justify-content: center;
  width: 90%;
  margin: 20px auto;
  align-items: center;
  height: auto;
}

.border_spec {
  border-radius: 6px;
  border: 1px solid #ebeef5;
  float: left;
  width: 25%;
  height: auto;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.about_me_p {
  font-size: 1.25em;
  font-weight: normal;
  padding: 0 20px;
  margin: 10px;
}

.border_title {
  font-family: "PingFang SC";
  margin-top: 10px;
  font-size: 1.125em;
  font-weight: bold;
  text-align: center;
}

.border_content_one {
  margin-top: 20px;
  font-size: 1.125em;
  text-align: center;
}

.border_content_two {
  margin-top: 5px;
  font-size: 1.125em;
  margin-bottom: 25px;
  text-align: center;
}

.img_border {
  margin-top: 15px;
  width: 80px;
  height: 80px;
}

.border_spec_inner_one {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 35px;
  height: 70px;
}

.border_spec_content_one {
  margin-top: 15px;
  font-size: 1.125em;
  float: left;
  text-align: center;
}

.border_spec_inner_last {
  margin-top: 15px;
  font-size: 1.125em;
  float: left;
  margin-bottom: 25px;
  text-align: center;
}

.cooperation {
  margin-top: 30px;
  width: 100%;
}

.about_me {
  display: flex;
  margin-top: 30px;
  justify-content: center;
  width: 100%;
}

.product_mobile {
  width: 90%;
  align-items: center;
  margin: 20px auto;
  background: #f2f6fc;
}

.product_mobile_img_div {
  width: 50%;
  height: auto;
}

.product_mobile_content_one {
  margin-top: 20px;
  text-align: center;
}

.product_mobile_content_two {
  margin-top: 10px;
  text-align: center;
}

/* 屏幕设备适配 max-device-width: 400px */
@media screen and (max-device-width: 415px) {
  .slider_img {
    height: 250px;
    width: 100%;
  }

  .border_parent {
    display: flex;
    width: 90%;
    margin: auto;
    height: auto;
    flex-direction: column;
  }

  .border {
    border-radius: 6px;
    border: 1px solid #ebeef5;
    float: left;
    width: 100%;
    height: auto;
    margin: 10px 0 auto;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    /*background: aquamarine;*/
  }

  .border_img_parent {
    margin-top: 0;
  }

  .product_mobile {
    width: 90%;
    align-items: center;
    margin: 20px auto;
    height: auto;
    background: #f2f6fc;
  }

  .product_mobile_content {
    width: 100%;
    margin-top: 15px;
  }

  .product_mobile_content_one {
    margin-top: 5px;
  }

  .product_mobile_content_two {
    margin-top: 5px;
  }

  .product_mobile_img_div {
    display: flex;
    width: 100%;
    height: auto;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 15px;
  }

  .product_mobile_img {
    float: left;
  }

  .product_mobile_title {
    font-weight: bold;
  }

  .product_pc_one {
    width: 100%;
    margin-top: 15px;
  }

  .font_size_30 {
    font-size: 1.25em;
  }

  .product_font_style {
    font-size: 1em;
  }

  .product_pc_img {
    height: 280px;
    width: 320px;
  }

  .product_pc_img_div {
    width: 100%;
    float: left;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
  }

  .product_pc {
    display: flex;
    width: 90%;
    height: auto;
    margin: 20px auto;
    background: #f2f6fc;
    flex-direction: column;
  }

  .head-label {
    display: flex;
    margin-top: 10px;
  }

  .product_spec_parent {
    display: flex;
    width: 90%;
    align-items: center;
    justify-content: center;
    margin: 20px auto;
    height: auto;
    flex-direction: column;
  }

  .border_spec {
    float: left;
    height: auto;
    margin: 8px;
    width: 100%;
    border-radius: 6px;
    border: 1px solid #ebeef5;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }

  .border_title {
    font-family: "PingFang SC";
    margin-top: 5px;
    font-size: 1.125em;
    font-weight: bold;
  }

  .border_content_one {
    margin-top: 5px;
    font-size: 1.125em;
  }

  .border_content_two {
    margin-top: 5px;
    font-size: 1.125em;
    margin-bottom: 8px;
  }

  .img_border {
    margin-top: 8px;
    width: 80px;
    height: 80px;
  }

  .border_spec_inner_one {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 8px;
    /*background-color: aqua;*/
    height: 70px;
  }

  .border_spec_content_one {
    margin-top: 5px;
    font-size: 1.125em;
    float: left;
  }

  .border_spec_inner_last {
    /*background-color: bisque;*/
    margin-top: 5px;
    font-size: 1.125em;
    float: left;
    margin-bottom: 8px;
  }

  .about_me {
    display: flex;
    margin-top: 10px;
    width: 100%;
  }
}

.border_spec_img {
  width: 75px;
  height: 55px;
  align-self: center;
}

.font_size_24 {
  font-size: 1.5em;
}
</style>
