PGDMP     :                
    y            listadeproductos    13.4    13.4     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    24587    listadeproductos    DATABASE     t   CREATE DATABASE listadeproductos WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'English_United States.1252';
     DROP DATABASE listadeproductos;
                postgres    false            �            1259    24593    stock    TABLE     K   CREATE TABLE public.stock (
    id integer NOT NULL,
    qstock integer
);
    DROP TABLE public.stock;
       public         heap    postgres    false            �          0    24593    stock 
   TABLE DATA           +   COPY public.stock (id, qstock) FROM stdin;
    public          postgres    false    200   
       )           2606    24597    stock stock_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.stock
    ADD CONSTRAINT stock_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.stock DROP CONSTRAINT stock_pkey;
       public            postgres    false    200            �   6   x�Ǳ�0�x��{��B�u�d�	YN��a�v�ܴ�%eu�~��֢p     