PGDMP                     
    y            listadeproductos    13.4    13.4     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    24587    listadeproductos    DATABASE     t   CREATE DATABASE listadeproductos WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'English_United States.1252';
     DROP DATABASE listadeproductos;
                postgres    false            �            1259    24598    precio    TABLE     T   CREATE TABLE public.precio (
    id integer NOT NULL,
    preciounitario numeric
);
    DROP TABLE public.precio;
       public         heap    postgres    false            �          0    24598    precio 
   TABLE DATA           4   COPY public.precio (id, preciounitario) FROM stdin;
    public          postgres    false    201   %       )           2606    24605    precio precio_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.precio
    ADD CONSTRAINT precio_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.precio DROP CONSTRAINT precio_pkey;
       public            postgres    false    201            �   7   x�%��  ��]J ���� 2�Yˎ4c�C"�)�\��7���,�~\����{
�     