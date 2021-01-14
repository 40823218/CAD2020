var tipuesearch = {"pages": [{'title': 'About', 'text': '倉儲: https://github.com/40823218/CAD2020 \n \n \n', 'tags': '', 'url': 'About.html'}, {'title': '每周進度', 'text': '\n', 'tags': '', 'url': '每周進度.html'}, {'title': 'W1 SolidWorks零件繪圖練習1(43~50)', 'text': '下載檔案 \n 雲端硬碟: https://drive.google.com/file/d/1R-k9Tc4n0GJcVOwbVKYUTtr6We0VoCz7/view \n \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'W1 SolidWorks零件繪圖練習1(43~50).html'}, {'title': 'W2', 'text': 'PDF: http://mde.tw/cad2020/downloads/nx_python_examples.pdf \n', 'tags': '', 'url': 'W2.html'}, {'title': 'W4', 'text': 'PDF1零件43 \n \n', 'tags': '', 'url': 'W4.html'}, {'title': 'W7 ANSI C', 'text': '下載 \n \n', 'tags': '', 'url': 'W7 ANSI C.html'}, {'title': 'W8', 'text': 'NX \n # nx_open_part.py\n# 導入 NXOpen\nimport NXOpen\nimport NXOpen.UF\nimport NXOpen.Gateway\n    \ndef main():\n    # 取得目前開啟的工作階段\n    theSession = NXOpen.Session.GetSession()\n    theUfSession = NXOpen.UF.UFSession.GetUFSession()\n       \n    # 建立 ListingWindow\n    listWin= theSession.ListingWindow\n    # 開啟零件檔案\n    basePart1 = theSession.Parts.OpenBaseDisplay("y:/tmp/block.prt")\n    workPart = theSession.Parts.Work\n    unit1 = workPart.UnitCollection.FindObject("MilliMeter")\n    # height\n    p7 = workPart.Expressions.FindObject("p7")\n    # width\n    p8 = workPart.Expressions.FindObject("p8")\n    # length\n    p9 = workPart.Expressions.FindObject("p9")\n    workPart.Expressions.EditWithUnits(p7, unit1, "30")\n    workPart.Expressions.EditWithUnits(p8, unit1, "60")\n    workPart.Expressions.EditWithUnits(p9, unit1, "90")\n    theSession.UpdateManager.DoUpdate(0)\n    #saveStatus1 = workPart.SaveAs("y:/tmp/block_new.prt")\n    #saveStatus1.Dispose()\n    # initialize list to hold bodies\n    theBodyTags = []\n    \n    for x in workPart.Bodies:\n        if x.IsSolidBody:\n            theBodyTags.append(x.Tag)\n       \n    # 準備輸出 ASCII 格式 STL 零件檔案\n    sTLCreator1 = theSession.DexManager.CreateStlCreator()\n    sTLCreator1.AutoNormalGen = True\n    sTLCreator1.ChordalTol = 0.08\n    sTLCreator1.AdjacencyTol = 0.08\n    sTLCreator1.OutputFile = "y:\\\\tmp\\\\block_ascii.stl"\n    # Binary STL: NXOpen.STLCreatorOutputTypeEnum.Binary\n    sTLCreator1.OutputType = NXOpen.STLCreatorOutputTypeEnum.Text\n    # 已知 body1 命名\n    body1 = workPart.Bodies.FindObject("EXTRUDE(2)")\n    added1 = sTLCreator1.ExportSelectionBlock.Add(body1)\n    nXObject1 = sTLCreator1.Commit()\n    sTLCreator1.Destroy()\n   \n    # 開啟所建立的 ListingWindow\n    listWin.Open()\n    listWin.WriteLine("number of solid bodies: " + str(len(theBodyTags)))\n    \n    (massProps, Stats) = theUfSession.Modeling.AskMassProps3d(theBodyTags, len(theBodyTags), 1, 4, .03, 1, [0.99,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0])\n    listWin.WriteLine("units: kg, mm")\n    listWin.WriteLine("surface area: " + str(massProps[0]))\n    listWin.WriteLine("volume: " + str(massProps[1]*1E9))\n    # 在 ListingWindow 中寫入字串\n    listWin.WriteLine("Hello, NXOpen")\n    listWin.Close()\n      \n    # 將零件檔案 fit 之後, export 出 png 檔案\n    theUI = NXOpen.UI.GetUI()\n    imageExportBuilder1 = theUI.CreateImageExportBuilder()\n  \n    custombackgroundcolor1 = [None] * 3\n    custombackgroundcolor1[0] = 1.0\n    custombackgroundcolor1[1] = 1.0\n    custombackgroundcolor1[2] = 1.0\n  \n    imageExportBuilder1.SetCustomBackgroundColor(custombackgroundcolor1)\n    imageExportBuilder1.FileFormat = NXOpen.Gateway.ImageExportBuilder.FileFormats.Png\n    imageExportBuilder1.FileName = "y:\\\\tmp\\\\block.png"\n  \n    imageExportBuilder1.BackgroundOption = NXOpen.Gateway.ImageExportBuilder.BackgroundOptions.Original\n  \n    imageExportBuilder1.EnhanceEdges = False\n    imageExportBuilder1.RegionMode = False\n    # fit view 後 commit export png\n    workPart.ModelingViews.WorkView.Fit()\n    nXObject6 = imageExportBuilder1.Commit()\n  \n    imageExportBuilder1.Destroy()\n       \nif __name__ == "__main__":\n    main() \n', 'tags': '', 'url': 'W8.html'}, {'title': '小組作業', 'text': '因輪軸尺寸與外框相同，因而產生干涉。 \n \n 修改後 \n \n 將輪軸由5修改為4 \n \n \n \n 輪軸兩側導桿尺寸修改後，可完成一次行程 \n \n', 'tags': '', 'url': '小組作業.html'}]};