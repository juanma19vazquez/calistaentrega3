PGDMP     -                
    y            listadeproductos    13.4    13.4     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    24587    listadeproductos    DATABASE     t   CREATE DATABASE listadeproductos WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'English_United States.1252';
     DROP DATABASE listadeproductos;
                postgres    false            �            1259    24659 	   productos    TABLE     �   CREATE TABLE public.productos (
    id bigint NOT NULL,
    product_name character varying(50),
    talle character varying(10),
    animal character varying(50)
);
    DROP TABLE public.productos;
       public         heap    postgres    false            �            1259    24657    productos_id_seq    SEQUENCE     y   CREATE SEQUENCE public.productos_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.productos_id_seq;
       public          postgres    false    203            �           0    0    productos_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.productos_id_seq OWNED BY public.productos.id;
          public          postgres    false    202            (           2604    24662    productos id    DEFAULT     l   ALTER TABLE ONLY public.productos ALTER COLUMN id SET DEFAULT nextval('public.productos_id_seq'::regclass);
 ;   ALTER TABLE public.productos ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    203    202    203            �          0    24659 	   productos 
   TABLE DATA           D   COPY public.productos (id, product_name, talle, animal) FROM stdin;
    public          postgres    false    203   �
       �           0    0    productos_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.productos_id_seq', 11, true);
          public          postgres    false    202            *           2606    24664    productos productos_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.productos
    ADD CONSTRAINT productos_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.productos DROP CONSTRAINT productos_pkey;
       public            postgres    false    203            �   �   x�3�tt�t�w���H-*��2�	�r�B��aB>�>P!NgG��P�$ݦ(�#�P��s�8��s��;B���K�,��C\C\1d,9�B���\�|<��l64@�@Xmh�"��;F��� �PB�     