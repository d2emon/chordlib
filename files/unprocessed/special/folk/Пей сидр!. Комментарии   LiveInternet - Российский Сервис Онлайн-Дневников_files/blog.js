var blog_width = screenSize().w;
if (blog_width > 1200)
{
	blog_width = '1200px';
}
else
{
	//blog_width = 1000;
	if (blog_width > 1000)
	{
		blog_width = '1000px';
	}
	else
	{
		blog_width = '1000px';
		document.write ('<style type="text/css">#BlWrapper #CON {width:650px;}</style>');
	}
}
document.write ('<style type="text/css">#BlWrapper {width:'+blog_width+';}</style>');


//���������� ������ ��� �������
var restype = "diary";

//���������, ������ �������� ��� ���
if (auth == 1)
{
	if ((curj==userid)||(userid==739)||(userid==644454)||(userid==44992)||(userid==2635239))
	{
		var utype=1;
	} 
	else
	{
		var utype=0;
	}
}


/*������� ������ � �������*/
//var opera = Boolean(window["opera"]);
var ie = (navigator.appName.indexOf("Microsoft") != -1);// && !opera;

/*������ �������� �������*/
//��������� ������ � �������
function selectText(input) {
    if (input.createTextRange) {
        var oRange = input.createTextRange();
        oRange.moveStart("character", 0);
        oRange.moveEnd("character", 0);
        oRange.select();
    } else if (input.setSelectionRange) {
        input.setSelectionRange(0, input.value.length);
    }

    input.focus();
};

/* ����� �� ����� */
function showtag (blockid,tagname,tagid,journalid,superdomain,tagname_enc)
{
	document.getElementById(blockid).innerHTML="<div><a href='"+superdomain+"tags/"+tagname_enc+"/'>������ � ����� <b>"+tagname+"</b> � ���� ��������</a><br /><a href='http://www.liveinternet.ru/tags/"+tagname_enc+"/'>������ � ����� <b>"+tagname+"</b> �� ���� ���������</a></div>";
}

/* �������� �������
-----------------------------------------------*/
	var blog = new Object();
	/* �������
	----------------------------------------------- */
		blog.sidebar = new Object();
		/* -----------[ ������ � ������ ]----------- */
			blog.sidebar.tofriend = function (site,userid,curj)
			{
				if (curj!=userid)
				{
					document.write('<a class=\"GlIco2Friend\" href=\"/member2.php?action=addlist&userlist=buddy&userid='+curj+'&userownid='+userid+'\">� ������</a>');	
					
				}
			}	
		/* -----------[ ������������/�������������� ������ ]----------- */
			blog.sidebar.hide = function (blockid,appid)
			{
				var profile_inner_id = document.getElementById('BlockVarInner-'+blockid+'_'+appid);
			 	var profile_link_id = document.getElementById('BlockVarLink-'+blockid+'_'+appid);
			
				if (profile_inner_id.style.display=='none')
				 {
					 var pars = 'cmd=unhide&code='+blockid+'&app_id='+appid+'&leftpart=1';
					 Effect.Appear(profile_inner_id, { duration: 0.2 });
					 profile_link_id.innerHTML = '-';
				 }
				 else
				 {
					  var pars = 'cmd=hide&code='+blockid+'&app_id='+appid+'&leftpart=1';
					  Effect.Fade(profile_inner_id, { duration: 0.2 });
					  profile_link_id.innerHTML = '+';
				 }
				 var myAjax = new Ajax.Updater('', '/profilecontrol.php', {method: 'get', parameters: pars});
			}
		/* -----------[ �������� ������ ]----------- */
			blog.sidebar.del = function (blockid,appid)
			{
				var pars = 'cmd=delete&code='+blockid+'&app_id='+appid+'';
				var myAjax = new Ajax.Updater('', '/profilecontrol.php', {method: 'get', parameters: pars});
				var profile_id = document.getElementById('BlockVar-'+blockid+'_'+appid);
				Effect.Fade(profile_id, { duration: 0.2 });
			}