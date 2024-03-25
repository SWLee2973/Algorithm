-- 코드를 입력하세요
SELECT ugu.user_id, ugu.nickname, sum(price) as total_sales
from used_goods_board ugb, used_goods_user ugu
where ugb.writer_id = ugu.user_id
and ugb.status = 'DONE'
and (select sum(price) from used_goods_board where writer_id = ugu.user_id and status = 'DONE') >= 700000
group by ugu.user_id, ugu.nickname
order by total_sales;