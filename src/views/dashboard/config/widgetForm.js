let obj = {
  column: [
    {
      type: "input",
      label: "单行文本",
      span: 24,
      display: true,
      prop: "a173680206014225966",
      readonly: true,
      required: true,
      rules: [
        {
          required: true,
          message: "单行文本必须填写",
        },
      ],
      disabled: true,
    },
    {
      type: "radio",
      label: "单选框组",
      dicData: [
        {
          label: "选项一",
          value: "0",
        },
        {
          label: "选项二",
          value: "1",
        },
        {
          label: "选项三",
          value: "2",
        },
      ],
      span: 24,
      display: true,
      dicOption: "static",
      props: {
        label: "label",
        value: "value",
      },
      prop: "a173680206129949721",
    },
    {
      type: "date",
      label: "日期",
      span: 24,
      display: true,
      format: "yyyy-MM-dd",
      valueFormat: "yyyy-MM-dd",
      prop: "a173680206439444129",
    },
  ],
  labelPosition: "left",
  labelSuffix: "：",
  labelWidth: 120,
  gutter: 0,
  menuBtn: true,
  submitBtn: true,
  submitText: "提交",
  emptyBtn: true,
  emptyText: "清空",
  menuPosition: "center",
};
